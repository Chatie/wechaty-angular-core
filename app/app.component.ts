import {
  Component
  // , ChangeDetectionStrategy
} from '@angular/core'

import { Brolog } from 'brolog'

import { WechatyCoreCmp } from '../src/wechaty-core.component/index'

@Component({
  selector: 'wechaty-app'
  , moduleId: module.id
  , templateUrl: 'app.component.html'
  , directives: [
    WechatyCoreCmp
  ]
  // , changeDetection: ChangeDetectionStrategy.Default
})

export class WechatyAppCmp {
  title = 'Wechaty APP'

  token: string
  lastEvent: any = []

  constructor(private log: Brolog) {
    log.verbose('WechatyAppCmp', 'constructor()')
  }

  setToken(wechaty: WechatyCoreCmp) {
    wechaty.token = this.token
  }

  onEvent(name: string, data: any) {
    this.log.verbose('WechatyAppCmp', 'onEvent(%s, %s)', name, data)

    this.lastEvent.push(name + ':' + JSON.stringify(data))
        
    // const newEvent = {}
    // newEvent[name] = data

    // const obj = Object.assign({}, this.lastEvent, newEvent)
    // console.log('obj = ', obj)
    // console.log('lastEvent = ', this.lastEvent)
    // this.lastEvent = obj
    // // this.lastEvent[name] = data
    // console.log(this.lastEvent)
  }

  shutdown(wechaty: WechatyCoreCmp) {
    wechaty.shutdown('by WechatyAppCmp')
  }

  reset(wechaty: WechatyCoreCmp) {
    wechaty.reset('by WechatyAppCmp')
  }
}
