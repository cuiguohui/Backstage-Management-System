/**
 * Created by 崔国辉 on 2018/11/15 0015 11:18
 * Develop by 崔国辉 on 2018/11/15 0015 11:18
 */
import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Styles from './richText.module.css';
import './richText.keep.css';

class RichText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorContent: undefined,
    };
  }

  handleEditorChange = (editorContent) => {
    this.setState({
      editorContent,
    });
  };

  render() {
    const { editorContent } = this.state;
    console.log(editorContent);
    return (
      <div className={Styles.root}>
        <Editor
          placeholder="请输入正文~~尝试@哦，有惊喜"
          localization={{ locale: 'zh' }}
          onEditorStateChange={this.handleEditorChange}
        />
      </div>
    );
  }
}

export default RichText;
