import {useState, useEffect, useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [salario, setSalario] = useState('')
  const [salarios,setSalarios] = useState([]);
  // Referencias a elementos
  let refNombre = useRef()
  const guardar = () => {
    //Agregar datos al array a través del método setSalarios para el array salarios
    setSalarios(misalarios => [...misalarios,{nombre:nombre,salario:salario}] );
    //console.log(salarios);
    setNombre('');
    setSalario('')
    refNombre.current.focus();
  }
  
  let buscar = (nombuscar) =>{
    let nomenc = salarios.find(sal => sal.nombre == nombre);
    if (nomenc != undefined){
      setSalario(nomenc.salario);
    }
    else{
      alert("Nombre no hallado");
    }
  }
  return (
    <View style={[styles.container,styles.alignView]}>
      <header >SIMULADOR DE CREDITO</header>
        <View style={{flexDirection:'colum', flexWrap:'wrap'}}>
          <Text>Nombre</Text>
          <TextInput    
            style={{borderWidth:1, borderStyle:'solid', 
            padding:1,marginRight: 10, textAlign: 'center'}} 
            onChangeText={nombre => setNombre(nombre)}
            value={nombre}
            ref={refNombre}
          />

          <Text>Monto préstamo</Text>
          <TextInput    
            style={{borderWidth:1, borderStyle:'solid', 
            padding:1, textAlign: 'center'}} 
            onChangeText={nombre => setNombre(nombre)}
            value={nombre}
            ref={refNombre}
          />

          <Text>Númeo de cuotas</Text>
          <TextInput    
            style={{borderWidth:1, borderStyle:'solid', 
            padding:1, textAlign: 'center'}} 
            onChangeText={nombre => setNombre(nombre)}
            value={nombre}
            ref={refNombre}
          />

          <Text>Valor de cuota</Text>
          <TextInput    
            style={{borderWidth:1, borderStyle:'solid', 
            padding:1, textAlign: 'center'}} 
            onChangeText={nombre => setNombre(nombre)}
            value={nombre}
            ref={refNombre}
          />

          <Text>Fecha</Text>
          <TextInput    
            style={{borderWidth:1, borderStyle:'solid', 
            padding:1, textAlign: 'center'}} 
            onChangeText={nombre => setNombre(nombre)}
            value={nombre}
            ref={refNombre}
          />

          <Text>Tipo de préstamo</Text>
          <TextInput    
            style={{borderWidth:1, borderStyle:'solid', 
            padding:1, textAlign: 'center'}} 
            onChangeText={nombre => setNombre(nombre)}
            value={nombre}
            ref={refNombre}
          />

          <Text>Total deuda</Text>
          <TextInput    
            style={{borderWidth:1, borderStyle:'solid', 
            padding:1, textAlign: 'center'}} 
            onChangeText={nombre => setNombre(nombre)}
            value={nombre}
            ref={refNombre}
          />

          <StatusBar style="auto" />
        

          <TouchableOpacity
            onPress={buscar}
            style={{backgroundColor:'pink'}}
          >
              <Text style={{color:'black', padding:10}}>CALCULAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={guardar}
            style={{backgroundColor:'pink'}}
          >
              <Text style={{color:'black', padding:10}}>GUARDAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={buscar}
            style={{backgroundColor:'pink'}}
          >
              <Text style={{color:'black', padding:10}}>BUSCAR</Text>
          </TouchableOpacity>

          <Text>{'\n'}</Text>
          <View>
          {
              salarios.map(sal => {
                return (
                  <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
                    <Text style={{marginRight:10}}>{sal.nombre}</Text>
                    <Text>{new Intl.NumberFormat('es-CO').format(sal.salario)}</Text>
                  </View>
                );
              })
            }
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});