

* [Immutability vs Encapsulation in Angular Applications](https://vsavkin.com/immutability-vs-encapsulation-90549ab74487)

Two Problems with Mutable Objects

* They make tracking changes hard, both for the developer and the framework.
* They force Angular to be conservative by default, which negatively affects performance.

```ts
@Component({
  selector: 'person',
  template: `
    {{person.name}} lives at
    {{address.street}}, {{address.city}} (zipCode)`,
  changeDetection: ChangeDetectionStrategy.OnPush // <===
})
class DisplayPerson {
  @Input() person: {name:string};
  @Input() address: {city:string, street:string};
  zipCode: string;

  constructor(private zipCodes:ZipCodes) {}

  ngOnChanges(inputChanges) {
    // this means that the address was replaced
    if (inputChanges.address) {
      this.zipCode = this.zipCodes(this.address);
    }
  }
}
```

Using this change-detection strategy restricts when Angular has to check for updates from “any time something might change” to “only when this component’s inputs have changed”. As a result, the framework can be a lot more efficient about detecting changes in DisplayPerson. If no inputs change, no need to check the component’s template. The framework will check OnPush components only when their inputs change or components’ templates emit events.