# Biomedicine and chemistry prize-article panel

## Summary

The biomedicine and chemistry prize-article panel links prize-winning scientists to MEDLINE publications so risky research strategies can be compared with extraordinary-recognition outcomes.

## Canonical Form

- Unit of analysis: prize, awardee, author cluster, MEDLINE article, award year, or pre-award publication window.
- Typical representation: award list linked to disambiguated author-publication records and strategy labels.
- Mechanism or measurement target: whether high-recognition scientists and papers are enriched for rare or risky research strategies.
- Empirical signature: prize-linked publications have higher shares of jumps or new consolidations than the baseline publication pool.

## Uses in Science of Science

- Supplies the data layer for [prize-winner strategy enrichment](../validations/prize_winner_strategy_enrichment.md).
- Adds a recognition outcome to [risky-strategy compensation test](../validations/risky_strategy_compensation_test.md), beyond ordinary citation counts.
- Provides a template for linking award, prize, or honor data to publication-level strategy measures.
- Connects prize-based validation to broader [responsible metrics](../measures/responsible_metrics.md) caveats about status and recognition.

## Operationalization

- Compile prizes and awardees from a documented source list.
- Exclude non-research or student awards when the target is scientific achievement.
- Identify seed articles for winners in PubMed or MEDLINE.
- Use author-name disambiguation to expand each awardee's publications.
- Restrict publications to a pre-award window when the goal is to characterize work leading to recognition.
- Record expected linkage-bias direction separately from generic matching caveats.

## Evidence and Validations

- Verified full-text evidence from Foster et al. (2015) compiles 137 prizes and awards in biomedicine and chemistry from Wikipedia category pages.
- The paper excludes prizes for non-research reasons and awards to students.
- Foster et al. identify seed articles for prize winners in PubMed, map names using the Author-ity tool, and associate publications up to 30 years before the award.
- Their figure notes a panel of 7,594 awardees and 241,176 articles for the prize-strategy analysis.
- The seed-to-author-cluster method is split into [prize-winner Author-ity expansion](../methods/prize_winner_authority_expansion.md), and its conservative name-mapping caveat is split into [prize-name mapping conservative bias](../validations/prize_name_mapping_conservative_bias.md).

## Caveats

- Wikipedia prize lists are incomplete and uneven across fields.
- PubMed/MEDLINE coverage favors biomedical work over peripheral biology, chemistry, ecology, or entomology awards.
- Author disambiguation and seed-article errors can create false positives or false negatives.
- Prize data reflect status, field norms, and award institutions as well as scientific contribution.

## Links

- [prize-winner strategy enrichment](../validations/prize_winner_strategy_enrichment.md)
- [prize-winner Author-ity expansion](../methods/prize_winner_authority_expansion.md)
- [prize-name mapping conservative bias](../validations/prize_name_mapping_conservative_bias.md)
- [risky-strategy compensation test](../validations/risky_strategy_compensation_test.md)
- [research strategy taxonomy](../methods/research_strategy_taxonomy.md)
- [project-level strategy labels](../methods/project_level_strategy_labels.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [Nobel-prize credit validation](../validations/nobel_prize_credit_validation.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `biomedicine_chemistry_prize_article_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: prize-winner publication panel; biomedical prize article data; chemistry prize article panel; awardee MEDLINE publication panel
