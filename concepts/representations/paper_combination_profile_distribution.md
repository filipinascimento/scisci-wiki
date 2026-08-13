# Paper combination-profile distribution

## Summary

Paper combination-profile distribution represents a paper by the distribution of standardized scores for all pairwise combinations among its cited knowledge sources.

## Canonical Form

- Unit of analysis: paper, reference list, cited-journal pair, cited-source pair, concept pair, or topic pair.
- Typical representation: histogram or empirical distribution of pair-level conventionality and atypicality scores.
- Mechanism or measurement target: internal mixture of familiar and unusual knowledge combinations in a focal work.
- Empirical signature: a paper can be mostly conventional in its median while still containing a left tail of atypical combinations.

## Uses in Science of Science

- Provides the representation behind [median conventionality](../measures/median_conventionality.md) and [tail novelty](../measures/tail_novelty.md).
- Turns pair-level [journal-pair z-score](../measures/journal_pair_z_score.md) values into a paper-level recombination profile.
- Supports [novelty-conventionality quadrant typology](../measures/novelty_conventionality_quadrant_typology.md) and impact validation.
- Generalizes beyond journals to disciplines, papers, semantic topics, methods, datasets, or claims.

## Operationalization

- Generate all pairwise combinations among referenced entities in a focal paper.
- Attach a standardized pair score from a null model or historical baseline.
- Store the resulting paper-level distribution rather than only a single novelty score.
- Summarize the distribution with median, lower-tail percentile, upper-tail percentile, variance, or quantile profiles.
- Compare profile summaries with impact, field, team structure, review outcomes, or downstream use.

## Evidence and Validations

- Verified full-text evidence from Uzzi et al. (2013) assigns each paper a distribution of cited-journal-pair z-scores based on its reference list.
- The paper uses the median z-score to capture the main mass of conventional combinations and the 10th-percentile z-score to capture unusual left-tail combinations.
- Uzzi et al. show that these two summaries are not opposites: the highest hit-paper rate appears when papers have high median conventionality and high tail novelty.
- The paper states that the methodology can be applied at different resolutions, including disciplines, papers, or topics within papers.

## Caveats

- Reference-list length controls the number of possible pairs, so profile stability varies across papers.
- Journal-level profiles can hide within-journal conceptual diversity.
- Profiles should be stored with the entity type, null model, and publication-year baseline to remain comparable.

## Links

- [journal-pair z-score](../measures/journal_pair_z_score.md)
- [degree-preserving citation-network null](../methods/degree_preserving_citation_network_null.md)
- [median conventionality](../measures/median_conventionality.md)
- [tail novelty](../measures/tail_novelty.md)
- [novelty-conventionality quadrant typology](../measures/novelty_conventionality_quadrant_typology.md)
- [co-citation](co_citation.md)
- [citation networks](citation_networks.md)
- [semantic embeddings](semantic_embeddings.md)
- [topic models](../methods/topic_models.md)
- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)

## References

- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; WoS: unknown]

## Metadata

- Concept ID: `paper_combination_profile_distribution`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Uzzi et al. (2013) (2013)
- Latest seen paper: Uzzi et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1240474`
- OpenAlex ID: `W2066752129`
- Dimensions ID: `pub.1028974017`
- SciSciNet ID: `W2066752129`
- Aliases: paper z-score distribution; reference-pair profile; knowledge-combination profile; recombination profile distribution
