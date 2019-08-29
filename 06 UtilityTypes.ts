// Record<K,T>
interface PageInfo {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
};

// Pick<K,T>
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPicked = Pick<Todo, 'title' | 'completed'>;

const todoPicked: TodoPicked = {
    title: 'Clean room',
    completed: false,
};

// Omit<T,K>
type TodoOmitted = Omit<Todo, 'description'>;

const todoOmitted: TodoOmitted = {
    title: 'Clean room',
    completed: false,
};

// Exclude<T,U>; Extract<T,U>; NonNullable<T>; ReturnType<T>; InstanceType<T>; Required<T>; ThisType<T>

