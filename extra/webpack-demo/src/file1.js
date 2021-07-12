import join from 'lodash/join'

export function doWork() {
  console.log(join(['a', 'b', 'c'], '&&'))
}