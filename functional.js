function splitCSV(CSV){
    //let index = 1;
    const cities= CSV
    .split('\n')
    .filter((row) => /[\d]/.test(row[0]))
    .map((row) => {
    row = row.split(',')
    return  {'x': row[0], 'y': row[1], 'name': row[2], 'population': row[3]}
    })
    .sort((a, b) => b.population - a.population)
    .slice(0, 9)
    .reduce((acc, city, index) => {
        const name = city.name.replace(/[^а-яА-ЯіІ']/,'');
        acc[name] = {
        'population': city.population,
        'rating': index+1
        }
      return acc;
    },{})

    return (string) => {
        let prevWord = '';
        const originalString = 'назва міста (Х місце в ТОП-10 найбільших міст України, населення УУУУУУ чоловік)'
        const finalString = string
        .split(' ')
        .map((word) =>{
            if(cities[word]){
                const cityName = word;
                return originalString
                .replace("назва міста", word)
                .replace('Х', cities[word].rating)
                .replace("УУУУУУ", cities[word].population)
            }
            return word
        })
        .join(' ')

        return finalString;
    }
}

const getCity = splitCSV(`44.38,34.33,Алушта,31440,
49.46,30.17,Біла Церква,200131,
49.54,28.49,Бердичів,87575,#некомент

#
46.49,36.58,#Бердянськ,121692,
49.15,28.41,Вінниця,356665,
#45.40,34.29,Джанкой,43343,

# в цьому файлі три рядки-коментарі`)

//console.log(getCity(''));
//console.log(getCity('Алушта це прекрасне місто'));
//console.log(getCity('Я приїхав з міста Бердянськ'));
console.log(getCity('Я приїхав з Бердянськ в Алушта, а потім поїхав в Вінниця'));