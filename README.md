This is to fix the error - `multiple copies of React loaded.`

Because `react-addons-xxx` and `react-dom` module require React lib direclty, which causes React MUST bundled with the codes in browserify.

### Usage

```
npm install benpptung/react-addons-xxxx
