# Prize-winner Author-ity expansion

## Summary

Prize-winner Author-ity expansion maps seed publications by prize winners to disambiguated author-name clusters, then expands those clusters into a pre-award publication panel.

## Canonical Form

- Unit of analysis: prize winner, seed article, author-name cluster, disambiguated author string, publication record, or pre-award window.
- Typical representation: seed-to-cluster expansion, author-disambiguation lookup, awardee publication panel, or pre-award corpus.
- Method target: recover a broader publication history for recognized scientists when only awardee names and a few seed papers are known.
- Empirical signature: seed articles are used to anchor name clusters before querying the publication database for additional records.

## Uses in Science of Science

- Operationalizes the publication-linkage step in [biomedicine and chemistry prize-article panel](../datasets/biomedicine_chemistry_prize_article_panel.md).
- Provides the data-construction method behind [prize-winner strategy enrichment](../validations/prize_winner_strategy_enrichment.md).
- Connects prize-based recognition studies to [author name disambiguation](author_name_disambiguation.md) and [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md).
- Generalizes to award, society-fellow, highly-cited researcher, grant-winner, or elite-institution publication panels.

## Operationalization

- Compile prize winners and identify one or more high-confidence seed articles for each winner.
- Extract the awardee name as represented in the seed article's database record.
- Map that name to a disambiguated author-name cluster.
- Search the focal publication database for names in the cluster.
- Keep publications in a defined pre-award window and attach award, field, and strategy metadata.

## Evidence and Validations

- Verified full-text evidence from Foster et al. (2015) selects one to three PubMed seed articles for prize winners where possible.
- The paper maps prize-winner names from MEDLINE entries using the Author-ity tool to partially disambiguated author-name clusters.
- Foster et al. then search MEDLINE for names in each cluster and associate retrieved publications up to 30 years before the award with the prize winner.
- This expansion step produces the article panel used to compare prize-winner strategy distributions with the baseline literature.

## Caveats

- Seed-article errors can send the expansion into the wrong author cluster.
- Conservative disambiguation may reduce false merges while increasing false splits.
- Name changes, initials, transliteration, non-English characters, and database coverage can still create missing records.

## Links

- [biomedicine and chemistry prize-article panel](../datasets/biomedicine_chemistry_prize_article_panel.md)
- [prize-winner strategy enrichment](../validations/prize_winner_strategy_enrichment.md)
- [prize-name mapping conservative bias](../validations/prize_name_mapping_conservative_bias.md)
- [author name disambiguation](author_name_disambiguation.md)
- [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md)
- [author similarity clustering](author_similarity_clustering.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `prize_winner_authority_expansion`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: Author-ity prize expansion; seed-article author expansion; awardee publication expansion; prize-winner disambiguation expansion
