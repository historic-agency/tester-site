import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import Head from 'next/head';
import Script from 'next/script';
import { PLASMIC } from '../plasmic-init';

export default function Host() {
  return PLASMIC && (
    <div>
      <Head>
        {/* Nothing here for now */}
      </Head>
      <Script src="https://static1.plasmic.app/preamble.js"></Script>
      <PlasmicCanvasHost />
    </div>
  );
}