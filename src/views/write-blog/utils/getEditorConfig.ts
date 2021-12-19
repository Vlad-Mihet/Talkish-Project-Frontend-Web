import type { EditorConfig as EditorConfigAlias } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';

// Plugins
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Title from '@ckeditor/ckeditor5-heading/src/title';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import TablePlugin from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import Link from '@ckeditor/ckeditor5-link/src/link';

/**
 * getEditorConfig.ts
 *
 * Retrieves the editor configuration object
 *
 * @returns - The Editor Config Object
 */
function getEditorConfig(initialEditorData: string): EditorConfigAlias {
  const editorConfig: EditorConfigAlias = {
    blockToolbar: [
      'heading',
      '|',
      'paragraph',
      'link',
    ],
    balloonToolbar: [
      'bold',
      'italic',
      'heading1',
      'heading2',
      'heading3',
      '|',
      'bulletedList',
      'numberedList',
    ],
    language: 'en',
    highlight: {
      options: [{
        model: 'yellowMarker',
        class: 'marker-yellow',
        title: 'Highlight',
        color: '#58b96b',
        type: 'marker',
      }],
    },
    initialData: initialEditorData,
    plugins: [
      Autosave,
      Bold,
      ItalicPlugin,
      Heading,
      Title,
      ListPlugin,
      Essentials,
      Highlight,
      TablePlugin,
      TableToolbar,
      TableCellProperties,
      TableProperties,
      BlockToolbar,
      Link,
    ],
  };

  return editorConfig;
}

export default getEditorConfig;
