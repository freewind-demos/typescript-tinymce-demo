import './index.css';
import tinymce from "tinymce";

tinymce.init({
    selector: '#editor'
}).catch(console.error);
