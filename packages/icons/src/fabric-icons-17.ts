  // Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import {
  IIconOptions,
  IIconSubset,
  registerIcons
} from '@uifabric/styling';

export function initializeIcons(
  baseUrl: string = '',
  options?: IIconOptions
): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-17"`,
      src: `url('${baseUrl}fabric-icons-17-4c14834f.woff') format('woff')`
    },
    icons: {
      'MicrosoftTranslatorLogoBlue': '\uF853',
      'InternalInvestigation': '\uF854',
      'AddReaction': '\uF85D',
      'ContactHeart': '\uF862',
      'VisuallyImpaired': '\uF866',
      'EventToDoLogo': '\uF869',
      'Variable2': '\uF86D',
      'ModelingView': '\uF871',
      'DisconnectVirtualMachine': '\uF873',
      'ReportLock': '\uF875',
      'Uneditable2': '\uF876',
      'Uneditable2Mirrored': '\uF877',
      'BarChartVerticalEdit': '\uF89D',
      'GlobalNavButtonActive': '\uF89F',
      'PollResults': '\uF8A0',
      'Rerun': '\uF8A1',
      'QandA': '\uF8A2',
      'QandAMirror': '\uF8A3',
      'BookAnswers': '\uF8A4',
      'AlertSettings': '\uF8B6',
      'TrimStart': '\uF8BB',
      'TrimEnd': '\uF8BC',
      'TableComputed': '\uF8F5',
      'DecreaseIndentLegacy': '\uE290',
      'IncreaseIndentLegacy': '\uE291',
      'SizeLegacy': '\uE2B2'
    }
  };

  registerIcons(subset, options);
}
