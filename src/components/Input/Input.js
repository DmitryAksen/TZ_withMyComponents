import React from "react";
import classes from './Input.module.css'
class Input extends React.Component {
  updateSearch(e) {
    let str = e.target.value.substr(0, 20);
    let { setSearch } = this.props;
    setSearch(str);
  }

  render() {

    let { search } = this.props;

    return (

        <div className={classes.myInput}>
  <form action="/action_page.php">  
    <label>search client</label>
    <input value={search}
          onChange={this.updateSearch.bind(this)} type="text" id="fname" name="firstname" placeholder="Type email.."/>

</form>
</div>

    );
  }
}

export default Input;

