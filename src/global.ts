export const mlp = window["mlp"] = {
  /**前往 */
  go: {} as (name: string) => void,
  back: history.back,
  forword: history.forward
}

export default mlp