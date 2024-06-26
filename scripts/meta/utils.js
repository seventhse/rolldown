import * as nodePath from 'node:path'
import * as nodeAssert from 'node:assert'
import { repoRoot } from './constants.js'

export function assertRunningScriptFromRepoRoot() {
  nodeAssert.equal(
    nodePath.normalize(process.cwd()),
    nodePath.normalize(repoRoot),
    'The script must be run from the root of the repo',
  )
}
