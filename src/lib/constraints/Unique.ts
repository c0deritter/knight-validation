import Constraint from '../Constraint'
import Misfit from '../Misfit'

export default class Unique extends Constraint {

  isUnique: (value: any, obj: any) => Promise<boolean>

  constructor(isUnique: (value: any, obj: any) => Promise<boolean>) {
    super()
    this.isUnique = isUnique
  }

  async validate(value: any, obj?: any): Promise<Misfit|undefined> {
    if (value === undefined) {
      return undefined
    }

    if (! await this.isUnique(value, obj)) {
      return new Misfit(this.type)
    }
  }
}