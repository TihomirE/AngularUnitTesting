import { StrengthPipe } from "./strength.pipe"

describe('StrengthPipe', () => {
    it('should display weak if strength is 5', () => {
        let pipe = new StrengthPipe();

        expect(pipe.transform(5)).toEqual('5 (weak)'); // pipe.transform could be pulled out into a variable (act part of testing)
    })
    it('should display strong if strength is 10', () => {
        let pipe = new StrengthPipe();

        expect(pipe.transform(10)).toEqual('10 (strong)'); // pipe.transform could be pulled out into a variable (act part of testing)
    })
    it('should display unbelievable if strength is 20', () => {
        let pipe = new StrengthPipe();

        expect(pipe.transform(20)).toEqual('20 (unbelievable)'); // pipe.transform could be pulled out into a variable (act part of testing)
    })

    // TODO - edge cases could/should be covered as well
})