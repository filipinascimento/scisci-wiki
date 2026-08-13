# WoS journal-pair recombination corpus

## Summary

WoS journal-pair recombination corpus is the Web of Science article corpus transformed into yearly co-cited journal-pair counts for measuring domain-level knowledge recombination.

## Canonical Form

- Unit of analysis: paper, cited reference, cited journal, cited-journal pair, publication year, or field.
- Typical representation: paper-reference lists, yearly journal-pair frequency table, randomized baseline counts, and paper-level pair-profile records.
- Dataset target: provide a large-scale domain-combination substrate for novelty, conventionality, and impact analyses.
- Empirical signature: millions of papers produce a sparse but very large set of possible journal-pair combinations.

## Uses in Science of Science

- Supplies the source data for [journal-pair z-score](../measures/journal_pair_z_score.md), [median conventionality](../measures/median_conventionality.md), and [tail novelty](../measures/tail_novelty.md).
- Links [Web of Science](web_of_science.md) reference lists to [co-citation](../representations/co_citation.md) and [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md).
- Provides a historical baseline for [novelty and conventionality](../mechanisms/novelty_conventionality.md) and [hit-paper probability](../measures/hit_paper_probability.md) studies.
- Requires [degree-preserving citation-network null](../methods/degree_preserving_citation_network_null.md) construction when observed pair counts need chance baselines.

## Operationalization

- Start from a WoS publication corpus with full reference lists and journal identifiers.
- For each focal paper, enumerate all pairwise combinations among cited journals.
- Count each cited-journal pair across all papers published in the same year.
- Store the total eligible journal universe, observed pair counts, and downstream randomized-network expected counts.
- Attach paper-level authorship, field, publication year, and citation outcome metadata for validation analyses.

## Evidence and Validations

- Verified full-text evidence from Uzzi et al. (2013) analyzes 17.9 million WoS research articles across scientific fields.
- The paper constructs yearly co-citation pairs from article bibliographies and aggregates paper-to-paper citation information to journal pairs to focus on domain-level combinations.
- Uzzi et al. report more than 122 million potential journal pairs from 15,613 indexed WoS journals.
- The same corpus supports paper-level profile distributions, hit-paper comparisons, team-size comparisons, and field/time robustness analyses.

## Caveats

- WoS coverage, cited-reference parsing, journal title normalization, and document-type filters shape the observable recombination universe.
- Journal-pair data are domain-level proxies and can miss within-journal conceptual diversity.
- Raw WoS data may be contract-restricted, so reproducible workflows need clear code, derived statistics, or access instructions.

## Links

- [Web of Science](web_of_science.md)
- [journal-pair z-score](../measures/journal_pair_z_score.md)
- [degree-preserving citation-network null](../methods/degree_preserving_citation_network_null.md)
- [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md)
- [co-citation](../representations/co_citation.md)
- [median conventionality](../measures/median_conventionality.md)
- [tail novelty](../measures/tail_novelty.md)
- [hit-paper probability](../measures/hit_paper_probability.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)

## References

- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; WoS: unknown]

## Metadata

- Concept ID: `wos_journal_pair_recombination_corpus`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Uzzi et al. (2013) (2013)
- Latest seen paper: Uzzi et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1240474`
- OpenAlex ID: `W2066752129`
- Dimensions ID: `pub.1028974017`
- SciSciNet ID: `W2066752129`
- Aliases: WoS cited-journal pair corpus; journal recombination corpus; cited-journal-pair panel; WoS recombination dataset
