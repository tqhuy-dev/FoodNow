import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({ selector: '[appColorStatus]' })
export class StatusDirective implements OnInit {
    @Input() color: string ;
    constructor(
        private el: ElementRef
    ) { }

    ngOnInit() {
        this.el.nativeElement.style.color  = this.color;
    }
}
