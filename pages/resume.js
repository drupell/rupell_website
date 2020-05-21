import './resume.css';

/**
 * Renders the pdf object to fill the screen. Resume is stored in static for use.
 *
 * @author drupell
 */

export default () => (
    <object data="../static/DavidRupellResume.pdf" type="application/pdf" width="100%" height="100%">
        <p>Find my resume<a href="../static/DavidRupellResume.pdf">here!</a></p>
    </object>
);