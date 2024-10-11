/// <reference lib="webworker" />
import { initMiner, start_mining } from 'miner'

let isInitialized = false

async function initWasm() {
  if (!isInitialized) {
    // Initialize the WASM module
    await initMiner() // Call your WASM initialization function
    isInitialized = true
  }
}

// Listen for messages from the main thread
addEventListener('message', async (event) => {
  await initWasm() // Ensure the WASM module is initialized

  const { challenge, nonceRangeStart, nonceRangeEnd, cutoff } = event.data

  // Call the WASM function
  const result = start_mining(challenge, BigInt(nonceRangeStart), BigInt(nonceRangeEnd), cutoff)

  // console.log('result -->', result)

  // Post the result back to the main thread
  postMessage({
    best_difficulty: result.best_difficulty,
    best_nonce: result.best_nonce,
    total_hashes: result.total_hashes
  })
})
