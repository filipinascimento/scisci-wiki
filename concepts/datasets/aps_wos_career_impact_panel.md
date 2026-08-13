# APS-WoS career impact panel

## Summary

The APS-WoS career impact panel is a pair of author-centered publication datasets used to study how productivity, citation impact, and recognition evolve across scientific careers.

## Canonical Form

- Unit of analysis: scientist, publication sequence, paper, citation window, discipline, or career cohort.
- Typical representation: disambiguated author-paper panel with publication order, publication year, ten-year citation impact, productivity N, and field or source label.
- Data type: longitudinal bibliometric career panel.
- Empirical signature: individual careers can be compared by productivity and impact trajectories while retaining enough paper-level detail to shuffle, rescale, or forecast citation outcomes.

## Uses in Science of Science

- Supplies the evidence base for [scientific career impact dynamics](../mechanisms/scientific_career_impact.md), [random impact rule](../mechanisms/random_impact_rule.md), [individual Q parameter](../measures/individual_q_parameter.md), and [Q-model career impact prediction](../methods/q_model_career_prediction.md).
- Connects a bounded physics corpus to broader [Web of Science](web_of_science.md) coverage and [Google Scholar](google_scholar.md) profile data.
- Makes source coverage visible when interpreting [field-normalized citation impact](../measures/field_normalized_citation_impact.md), [citation window selection](../methods/citation_window_selection.md), and [author name disambiguation](../methods/author_name_disambiguation.md).
- Complements the [Physical Review citation network](physical_review_citation_network.md), which is a paper-citation graph rather than a career-impact panel.

## Operationalization

- Construct author-disambiguated publication histories for scientists in one or more source systems.
- Attach paper-level impact measures such as citations accumulated ten years after publication.
- Define inclusion rules for career length, publication count, and activity gaps before modeling.
- Track which citation universe is observed, because an internal APS citation count and a WoS citation count have different denominators.

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) uses the publication record of 236,884 physicists publishing in the Physical Review journal family from 1893 to 2010.
- The same paper combines 24,630 Google Scholar career profiles with Web of Science data, covering 514,896 publications in biology, chemistry, cognitive sciences, ecology, economics, and neuroscience.
- The main reported APS analysis focuses on 2,887 scientists whose publication records span at least 20 years, include at least 10 publications, and include at least one publication every five years.
- Sinatra et al. note that APS citation counts are internal to the Physical Review corpus, while the WoS analysis uses normalized citation counts.

## Caveats

- Long-career filters create survivor bias and do not represent young scientists who left academia early.
- APS internal citations miss citations from outside the Physical Review journal family.
- Google Scholar profile and WoS coverage can introduce field, profile-adoption, and database-coverage biases.
- Author disambiguation and name changes are central data-quality risks.

## Links

- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [random impact rule](../mechanisms/random_impact_rule.md)
- [highest-impact sequence position](../measures/highest_impact_sequence_position.md)
- [within-career impact shuffle null](../validations/within_career_impact_shuffle_null.md)
- [individual Q parameter](../measures/individual_q_parameter.md)
- [project-potential distribution](../measures/project_potential_distribution.md)
- [Q-model career impact prediction](../methods/q_model_career_prediction.md)
- [Web of Science](web_of_science.md)
- [Google Scholar](google_scholar.md)
- [Physical Review citation network](physical_review_citation_network.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `aps_wos_career_impact_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: APS-WoS scientist career panel; Physical Review career impact panel; Google Scholar WoS career panel; Q-model career corpus
