import { doWork } from './file1';
import './style.css'
console.log('app start')

doWork();
const app = document.createElement('div');
app.classList.add('app');
document.body.appendChild(app)
