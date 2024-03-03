const estilo = "color: salmon; font-size: 16px; font-weight: bold";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

/* APARTADO 1 */
console.log("%cAPARTADO 1", estilo);

/* Extraer la lista de pacientes que están asignados a la especialidad de Pediatría */

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const arrayPediatria: Pacientes[] = pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra"
  );
  return arrayPediatria;
};

console.log(
  "Los pacientes asignados a pediatría son:",
  obtenPacientesAsignadosAPediatria(pacientes)
);

/* Extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años */

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const arrayPediatriaMenorDiezAños: Pacientes[] = pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10
  );
  return arrayPediatriaMenorDiezAños;
};

console.log(
  "Los pacientes asignados a Pediatría y menores de 10 años son: ",
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

/* APARTADO 2 */
console.log("%cAPARTADO 2", estilo);

/* Crear una función que devuelve true si la frecuencia cardíaca es superior a 100ppm y la temperatura corporal superior a 39 grados*/

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo: boolean = pacientes.some(
    (paciente) => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );

  return activarProctolo;
};

console.log(
  "¿Se debería activar el protocolo de urgencia?",
  activarProtocoloUrgencia(pacientes)
);

/* APARTADO 3 */
console.log("%cAPARTADO 3", estilo);

/* Reasignar a los pacientes de Pediatría a Médico de familia */

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesReasignados: Pacientes[] = pacientes.map((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      return {
        ...paciente,
        especialidad: "Medico de familia",
      };
    }

    return paciente;
  });

  return pacientesReasignados;
};

console.log(
  "Lista de pacientes actualizada: ",
  reasignaPacientesAMedicoFamilia(pacientes)
);

/* APARTADO 4 */
console.log("%cAPARTADO 4", estilo);

/* Comprobar si hay pacientes en pediatría */

const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  const hayPacientesDePediatria = pacientes.some(
    (paciente) => paciente.especialidad === "Pediatra"
  );
  return hayPacientesDePediatria;
};

console.log("¿Hay pacientes en pediatría?", hayPacientesDePediatria(pacientes));

/* APARTADO 5 */
console.log("%cAPARTADO 5", estilo);

/* Calcular el número de pacientes que hay en la especialidad Medico de familia, Cardiología y Pediatría */

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let medicoDeFamilia = 0;
  let pediatria = 0;
  let cardiologia = 0;

  pacientes.forEach((paciente) => {
    switch (paciente.especialidad) {
      case "Cardiólogo":
        cardiologia++;
        break;
      case "Medico de familia":
        medicoDeFamilia++;
        break;
      case "Pediatra":
        pediatria++;
        break;
    }
  });

  return {
    medicoDeFamilia: medicoDeFamilia,
    cardiologia: cardiologia,
    pediatria: pediatria,
  };
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
