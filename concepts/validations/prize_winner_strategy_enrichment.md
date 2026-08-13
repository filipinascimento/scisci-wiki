# Prize-winner strategy enrichment

## Summary

Prize-winner strategy enrichment tests whether articles associated with recognized scientists use rare, risky, or innovative strategies more often than the broader literature.

## Canonical Form

- Unit of analysis: prize-linked article, awardee, strategy class, article pool, field-specific award group, or high-impact subset.
- Typical representation: baseline strategy frequency compared with top-cited, prize-winner, or elite-prize article pools.
- Validation target: whether extraordinary recognition is associated with higher rates of risky strategies.
- Empirical signature: prize-linked articles show enrichment in jumps, new consolidations, or other rare strategy classes.

## Uses in Science of Science

- Provides the recognition-tail validation for [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md).
- Complements ordinary citation-risk calculations in [risky-strategy compensation test](risky_strategy_compensation_test.md).
- Uses [biomedicine and chemistry prize-article panel](../datasets/biomedicine_chemistry_prize_article_panel.md) to connect award data with strategy labels.
- Helps separate ordinary productivity incentives from extraordinary-recognition incentives.

## Operationalization

- Build a baseline distribution of strategy labels in the focal literature.
- Link prize winners to publications and label those publications with the same strategy taxonomy.
- Preserve the author-disambiguation expansion and linkage-bias audit so enrichment estimates can be interpreted as recognition-tail evidence.
- Compare prize-linked articles and elite-prize subsets against the baseline distribution.
- Report enrichment by field, prize prestige, and strategy class.
- Treat results as recognition-tail evidence rather than causal proof that risky strategy caused the prize.

## Evidence and Validations

- Verified full-text evidence from Foster et al. (2015) compares strategy frequencies for all articles, top-cited articles, and articles written by winners of 137 biomedicine and chemistry prizes.
- The paper reports that top-cited articles and prize-winner articles deploy significantly more novel strategies than the baseline article pool.
- Foster et al. find the strongest enrichment in jumps and new consolidations.
- The paper also reports similar enrichment patterns when awards are grouped into biomedicine and chemistry subsets, and identifies elite general awards including Nobel, Lasker, Gairdner, Wolf, and major society prizes.
- The prize-publication construction is split into [prize-winner Author-ity expansion](../methods/prize_winner_authority_expansion.md), and the matching-bias interpretation is split into [prize-name mapping conservative bias](prize_name_mapping_conservative_bias.md).

## Caveats

- Prize-winning scientists may have status, resources, teams, and field positions that affect both strategy and recognition.
- Prize-linked publications are not always the exact discovery papers honored by the award.
- Author disambiguation and MEDLINE coverage can bias the awardee publication panel.
- Enrichment validates an association with the recognition tail, not the expected payoff for a typical scientist.

## Links

- [biomedicine and chemistry prize-article panel](../datasets/biomedicine_chemistry_prize_article_panel.md)
- [prize-winner Author-ity expansion](../methods/prize_winner_authority_expansion.md)
- [prize-name mapping conservative bias](prize_name_mapping_conservative_bias.md)
- [risky-strategy compensation test](risky_strategy_compensation_test.md)
- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)
- [research strategy taxonomy](../methods/research_strategy_taxonomy.md)
- [project-level strategy labels](../methods/project_level_strategy_labels.md)
- [Nobel-prize credit validation](nobel_prize_credit_validation.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `prize_winner_strategy_enrichment`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: prize strategy enrichment; awardee risky strategy enrichment; elite prize novelty enrichment; recognition-tail strategy validation
