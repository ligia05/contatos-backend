module.exports = {
    index: (req,res) => {res.send('função index')},
    show: (req,res) => {res.send('função show')},
    search: (req,res) => {res.send('função search')},
    create: (req,res) => {res.send('função create')},
    destroy: (req,res) => {res.send('função destroy')},
    update: (req,res) => {res.send('função update')}
}