//Patrón Observer
interface IObserver <T>{
    update(element : T): void;
}

interface INotifier<T> {
    registrarObservador(observador: IObserver<T>): void;
    eliminarObservador(observador: IObserver<T>): void;
    notificar(element : T): void;
}