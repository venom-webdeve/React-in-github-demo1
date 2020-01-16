import{ Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sentencescase'
})

export class SentencesCasePipe implements PipeTransform {
    transform(str) {
        let firstchar=str.charAt(0);
        let restchar=str.subString(1);
        let sentence=firstchar.toUpperCase()+restchar.toLowerCase();
        return sentence;

    }
} 