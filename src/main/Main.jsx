import React from 'react';
import './Main.css'

import Storys from '../components/Story/Story';
import Suggestion from '../components/Suggestions/Suggestion';
import Posts from '../components/Post/Post'

export default ()=>
    <div className='main'>
        <div className='sec-1'>
          <Storys />
          <Posts />
        </div>
        <div className='sec-2'>
            <Suggestion />
        </div>
    </div>