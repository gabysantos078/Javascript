let car = {placa:"lzz-1976",ano:"1976",modelo:"Fusca",marca:"volks"}
        console.log(car)
        console.log(car.modelo)

        let jsonCar = JSON.stringify(car)
        console.log(jsonCar)
        console.log(jsonCar.modelo)

        let objCar = JSON.parse(jsonCar)
        console.log(objCar)
        console.log(objCar.modelo)
       
       
        /* let car = {placa:"lzz-1976",ano:"1976",modelo:"Fusca",marca:"volks"}
        console.log(car)
        console.log(car.placa)

        car.placa = "LZZ-0076"
        console.log(car.placa)

        let x = car
        console.log(x)

        x.marca = "volkswaggen"
        console.log(x)
        console.log(car)

        let pessoa = {nome:"maria", sobrenome: "dos santos",
        nomeCompleto: function (){
            return `${this.nome} ${this.sobrenome}`
            }        
        }
        console.log(pessoa.nomeCompleto())*/