var router = require('express').Router();


router.post('/', (req, res, next) => {
    try {

      const {query}  = req;
      const {body}  = req;

      /* validate could be more improve but for now its simple */

      if (!body || !body.value || !body.selected) {
          return res.status(400).json({message : 'payload is not valid'})
      }

      const status = body.selected && body.selected ? 'Selected' : 'Unselected'

      // checkbox logs
      if (query.checkbox && query.checkbox != 'undefined' && query.checkbox != 'null') {
        
        console.log(`CheckBox with the value of '${body.value}' is '${status}' `  )

      } else { // radio button logs
        console.log(`Radio Button with the value of '${body.value}' is '${status}' `  )
      }
      return res.json({message: 'Successful'});
    } catch (error) {
      res.json({message: 'Error', error :error.message});
    }
});


module.exports = router;
