import SubmitValues from './SubmitValues'
import { connect } from 'react-redux'
import * as valuesActions from '../../actions/valuesActions'
import { RootState } from '../../reducers'

const mapStateToProps = (state: RootState) => ({
  values: state.values,
})

const dispatchProps = {
  onSubmit: valuesActions.submit,
}

export default connect(mapStateToProps, dispatchProps)(SubmitValues)
