# Prize-name mapping conservative bias

## Summary

Prize-name mapping conservative bias occurs when awardee-publication matching errors mostly dilute observed differences between prize winners and the baseline population.

## Canonical Form

- Unit of analysis: awardee, seed article, author cluster, matched publication, false positive, false negative, or enrichment estimate.
- Typical representation: conservative-bias note, name-matching error audit, false-positive dilution, false-negative undercoverage, or awardee-panel sensitivity check.
- Validation target: whether publication-linkage errors inflate or attenuate estimates of prize-linked strategy enrichment.
- Empirical signature: common-name false positives add typical publications and missing special-character names omit prize-winner publications, both reducing apparent enrichment.

## Uses in Science of Science

- Qualifies [prize-winner Author-ity expansion](../methods/prize_winner_authority_expansion.md).
- Adds a validation caveat to [biomedicine and chemistry prize-article panel](../datasets/biomedicine_chemistry_prize_article_panel.md).
- Helps interpret [prize-winner strategy enrichment](prize_winner_strategy_enrichment.md) as a lower-bound association when matching errors are mostly diluting.
- Connects award-based validation to broader [author name disambiguation](../methods/author_name_disambiguation.md) and [responsible metrics](../measures/responsible_metrics.md) concerns.

## Operationalization

- Identify likely false positives from seed-article mistakes, common names, or overly broad author clusters.
- Identify likely false negatives from conservative clustering, spelling variants, non-English characters, transliteration, initials, and missing database coverage.
- Reason directionally about whether each error type inflates or attenuates the target enrichment.
- Where possible, manually audit high-impact names and repeat the analysis under stricter and looser linkage rules.
- Report the expected direction of bias rather than only a generic matching caveat.

## Evidence and Validations

- Verified full-text evidence from Foster et al. (2015) says mis-assigned seed articles could associate a prize winner with publications by another scientist.
- The paper argues that such false positives should look like typical scientists and likely underestimate the size of the prize effect.
- Foster et al. also note that prize winners with non-English characters in their names are underrepresented, giving the example of Sune Bergstrom not mapping well to an Author-ity cluster.
- The paper states that these false negatives also underestimate risky-strategy enrichment in prize-winner strategy distributions.

## Caveats

- Directional conservative-bias arguments need checking; some matching errors could still inflate estimates.
- Bias direction can differ across fields, name origins, award prestige, and database coverage.
- Manual examples do not substitute for a systematic linkage-quality audit.

## Links

- [prize-winner Author-ity expansion](../methods/prize_winner_authority_expansion.md)
- [biomedicine and chemistry prize-article panel](../datasets/biomedicine_chemistry_prize_article_panel.md)
- [prize-winner strategy enrichment](prize_winner_strategy_enrichment.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [homonym and synonym author errors](homonym_synonym_author_errors.md)
- [web-survey country coverage failure](web_survey_country_coverage_failure.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `prize_name_mapping_conservative_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: prize linkage conservative bias; awardee name-mapping dilution; prize-winner matching underestimation; conservative awardee linkage error
