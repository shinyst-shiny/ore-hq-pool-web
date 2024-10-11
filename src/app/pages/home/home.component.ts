import { Component } from '@angular/core'


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  /*worker: Worker

  before: number = 0

  constructor() {
    this.init()

    // Create a new instance of the worker
    this.worker = new Worker(new URL('./miner-worker.worker', import.meta.url), { type: 'module' })

    // Listen for messages from the worker
    this.worker.onmessage = ({ data }) => {
      console.log(
        'Mining Result: - best_difficulty',
        data.best_difficulty,
        ' - best_nonce',
        data.best_nonce,
        ' - total_hashes',
        data.total_hashes
      )
      const before = this.before
      const after = Date.now()
      console.log('total mining time:', (after - before) / 1000, 's')
      console.log('H/S:', Number(data.total_hashes) / ((after - before) / 1000))
    }
  }

  // Function to generate a random challenge (32 bytes)
  generateRandomChallenge(): Uint8Array {
    const challenge = new Uint8Array(32)
    // window.crypto.getRandomValues(challenge) // Use the browser's crypto API to generate random values
    // add 0 to each byte to make it 32 bytes
    for (let i = 0; i < challenge.length; i++) {
      challenge[i] = 0
    }
    return challenge
  }

  startMining() {
    const challenge = this.generateRandomChallenge()
    const nonceRangeStart = 1172000000n
    const nonceRangeEnd = 1175999999n
    const cutoff = 55

    console.log('challenge:', challenge)
    console.log('nonce range:', nonceRangeStart, nonceRangeEnd, nonceRangeEnd - nonceRangeStart, 'cutoff:', cutoff)
    this.before = Date.now()
    // Post the data to the worker
    this.worker.postMessage({ challenge, nonceRangeStart, nonceRangeEnd, cutoff })*/
  /*const before = Date.now()
  const result = start_mining(challenge, nonceRangeStart, nonceRangeEnd, cutoff)

  console.log(
    'Mining Result: - best_difficulty',
    result.best_difficulty,
    ' - best_nonce',
    result.best_nonce,
    ' - total_hashes',
    result.total_hashes
  )
  const after = Date.now()
  console.log('total mining time:', (after - before) / 1000, 's')
  console.log('H/S:', Number(result.total_hashes) / ((after - before) / 1000))*/
  //}
  /*private async init() {
    console.log('init options')
    await initMiner()
  }*/
}
