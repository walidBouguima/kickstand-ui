import { Component, h, ComponentInterface, Prop, Host } from '@stencil/core';

@Component({
    tag: 'ks-card-body'
})
export class CardBody implements ComponentInterface {
    @Prop() cardTitle: string;
    @Prop() cardSubtitle: string;

    render() {
        return (
            <Host class="card-body">
                {(this.cardTitle || this.cardTitle) && <header>
                    {this.cardTitle ? <h3 class="heading">{this.cardTitle}</h3> : null}
                    {this.cardTitle ? <h4 class="subheading">{this.cardSubtitle}</h4> : null}
                </header>}
                <div class="text">
                    <slot />
                </div>
            </Host>
        );
    }
}