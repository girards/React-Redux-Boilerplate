const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '300px',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#000000',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
  form: {
    marginLeft: '60%',
    marginTop: '200px',
    width: '25%',
  },
  error: {
    backgroundColor: '#ff0000',
  },
  withFont: {
    fontFamily: 'Lato',
  },
});

export default styles;
