/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MCHHero, MCH_HEROES, Fortune, FORTUNES } from '../data/mchData';

/**
 * おみくじのロジックを管理するサービス
 */
export class OmikujiService {
  /**
   * ランダムに運勢とヒーローを選択する
   */
  public static draw(): { hero: MCHHero; fortune: Fortune } {
    const heroIndex = Math.floor(Math.random() * MCH_HEROES.length);
    const fortuneIndex = Math.floor(Math.random() * FORTUNES.length);

    return {
      hero: MCH_HEROES[heroIndex],
      fortune: FORTUNES[fortuneIndex],
    };
  }

  /**
   * レアリティに応じた色を取得する
   */
  public static getRarityColor(rarity: string): string {
    switch (rarity) {
      case 'Legendary': return '#fbbf24';
      case 'Epic': return '#c084fc';
      case 'Rare': return '#60a5fa';
      case 'Uncommon': return '#4ade80';
      default: return '#b3b3b3';
    }
  }
}
