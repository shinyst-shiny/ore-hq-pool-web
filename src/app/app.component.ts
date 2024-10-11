import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ore-hq-pool-web'
  before: number = 0
  numWorkers = 0

  // worker: Worker
  private workers: Worker[] = []
  private results: any[] = [] // Store results from workers

  constructor () {
    this.numWorkers = navigator.hardwareConcurrency
    console.log('numWorkers', this.numWorkers)
    // this.init()

    // Create a new instance of the worker
    //this.worker = new Worker(new URL('./miner-worker.worker', import.meta.url), { type: 'module' })

    // Listen for messages from the worker
    /*this.worker.onmessage = ({ data }) => {
      this.workerResultData(data)
    }*/
  }

  // Function to generate a random challenge (32 bytes)
  generateTestChallenge (): Uint8Array {
    const challenge = new Uint8Array(32)
    // window.crypto.getRandomValues(challenge) // Use the browser's crypto API to generate random values
    // add 0 to each byte to make it 32 bytes
    for (let i = 0; i < challenge.length; i++) {
      challenge[i] = 0
    }
    return challenge
  }

  /*startMiningMainThread() {
    const challenge = this.generateTestChallenge()
    const nonceRangeStart = 1172000000n
    const nonceRangeEnd = 1175999999n
    const cutoff = 55

    console.log('challenge:', challenge)
    console.log('nonce range:', nonceRangeStart, nonceRangeEnd, nonceRangeEnd - nonceRangeStart, 'cutoff:', cutoff)
    this.before = Date.now()
    const before = Date.now()
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
    console.log('H/S:', Number(result.total_hashes) / ((after - before) / 1000))
  }*/

  startMiningWebWorker () {
    this.workers.forEach((worker) => worker.terminate())
    this.workers = []
    this.results = []

    const challenge = this.generateTestChallenge()
    const nonceRangeStart = 1172000000
    const nonceRangeEnd = 1175999999
    const cutoff = 55

    console.log('challenge:', challenge)
    console.log('nonce range:', nonceRangeStart, nonceRangeEnd, nonceRangeEnd - nonceRangeStart, 'cutoff:', cutoff)
    this.before = Date.now()
    // Post the data to the worker
    // this.worker.postMessage({ challenge, nonceRangeStart, nonceRangeEnd, cutoff })

    const noncesPerWorker = Math.ceil((nonceRangeEnd - nonceRangeStart) / this.numWorkers)

    for (let i = 0; i < this.numWorkers; i++) {
      const worker = new Worker(new URL('./miner-worker.worker', import.meta.url), { type: 'module' })

      worker.onmessage = ({ data }) => {
        this.results.push(data)
        if (this.results.length === this.numWorkers) {
          this.workerResultData(this.results)
        }
      }

      // Calculate the range of nonces for this worker
      const workerNonceStart = nonceRangeStart + i * noncesPerWorker
      const workerNonceEnd = Math.min(nonceRangeStart + (i + 1) * noncesPerWorker, nonceRangeEnd)

      // Post the data to the worker
      worker.postMessage({ challenge, nonceRangeStart: workerNonceStart, nonceRangeEnd: workerNonceEnd, cutoff })

      this.workers.push(worker) // Store the worker reference
    }
  }

  workerResultData (datas: any[]) {
    // find the data with the best difficulty
    const bestData = datas.reduce((a, b) => (a.best_difficulty > b.best_difficulty ? a : b))
    // sum all the total hashes
    const totalHashes: number = datas.reduce((a, b) => a + b.total_hashes, 0n)
    console.log('data', bestData)
    console.log(
      'Mining Result: - best_difficulty',
      bestData.best_difficulty,
      ' - best_nonce',
      bestData.best_nonce,
      ' - total_hashes',
      totalHashes
    )
    const before = this.before
    const after = Date.now()
    console.log('total mining time:', (after - before) / 1000, 's')
    console.log('H/S:', Number(totalHashes) / ((after - before) / 1000))
  }

  /*private async init() {
    console.log('init options')
    await initMiner()
  }*/
}
