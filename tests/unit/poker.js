import pokerPaser from '@/poker/pokerPaser.js'

describe('test poker', () => {
    it('test high K', () => {
        const hands = ['D2', 'B4', 'F5', 'HK', 'B3']
        expect(pokerPaser(hands)).toEqual('high K')
    })

    it('test high 9', () => {
        const hands = ['D2', 'B4', 'F5', 'H9', 'B3']
        expect(pokerPaser(hands)).toEqual('high 9')
    })

    it('a pair', () => {
        const hands = ['D3', 'B3', 'F4', 'HK', 'B5']
        expect(pokerPaser(hands)).toEqual('a 3 pair')
    })

    it('two pairs', () => {
        const hands = ['D3', 'B3', 'F4', 'HK', 'B4']
        expect(pokerPaser(hands)).toEqual('3, 4 pair')
    })

    it('three', () => {
        const hands = ['D3', 'B5', 'F5', 'H5', 'B4']
        expect(pokerPaser(hands)).toEqual('is 5 three')
    })

    it('flush', () => {
        const hands = ['D3', 'D5', 'D5', 'D5', 'D4']
        expect(pokerPaser(hands)).toEqual('D flush')
    })
})