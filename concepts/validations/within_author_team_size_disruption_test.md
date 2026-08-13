# Within-author team-size disruption test

## Summary

Within-author team-size disruption test asks whether the same scientists produce less disruptive work when they publish in larger teams, rather than attributing the pattern only to different people entering different team sizes.

## Canonical Form

- Unit of analysis: author-paper observation, scientist, team-size bin, publication year, field/topic, or paper.
- Typical representation: author fixed-effect regression predicting disruption percentile from team-size indicators.
- Validation target: separate compositional sorting of people from a team-size-associated mode of work.
- Empirical signature: the negative team-size coefficient remains after controlling for author identity, year, and topic.

## Uses in Science of Science

- Strengthens [team size and disruption](../mechanisms/team_size_disruption.md) by testing an individual-level explanation.
- Complements [disruptiveness fixed-effect decomposition](../methods/disruptiveness_fixed_effect_decomposition.md), which treats time, topic, and unit fixed effects as part of disruption robustness.
- Relies on [author name disambiguation](../methods/author_name_disambiguation.md) and source coverage from [Web of Science](../datasets/web_of_science.md).

## Operationalization

- Create author-paper observations from an author-disambiguated bibliometric panel.
- Use disruption percentile as the outcome and team-size indicators as predictors.
- Add publication-year, topic, and author fixed effects, with author-clustered standard errors.
- Compare estimates with and without author fixed effects; where possible, test alternative topic controls such as text embeddings.

## Evidence and Validations

- Verified full-text evidence from Wu, Wang, and Evans (2019) selects 38,000,470 WOS scholars with at least one cited paper from 1954-2014 and constructs 96,386,516 author-paper observations.
- The regression includes team-size dummies from 2 through 15-plus authors, publication year, ten broad topic IDs, and author ID; standard errors are clustered by author.
- Wu et al. report that the decrease in disruption with team size persists after adding author fixed effects.
- The Methods also test an alternative topic representation using 100-dimensional Doc2vec vectors inferred for 45,553 articles from 10,000 randomly selected scholars.

## Caveats

- Author fixed effects do not make team size randomly assigned; project type, funding, lab scale, and coauthor seniority can still vary within scientist.
- Name-disambiguation errors can contaminate within-author estimates, especially for common names and large-team fields.
- Repeated author-paper observations weight multi-author papers multiple times unless the model explicitly accounts for this design.

## Links

- [team size and disruption](../mechanisms/team_size_disruption.md)
- [WOS-patent-GitHub disruption corpus](../datasets/wos_patent_github_disruption_corpus.md)
- [team-size disruption-impact tail divergence](team_size_disruption_impact_tail_divergence.md)
- [research-design team-size control](research_design_team_size_control.md)
- [disruptiveness fixed-effect decomposition](../methods/disruptiveness_fixed_effect_decomposition.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [author metadata similarity features](../representations/author_metadata_similarity_features.md)
- [Web of Science](../datasets/web_of_science.md)
- [citation networks](../representations/citation_networks.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]

## Metadata

- Concept ID: `within_author_team_size_disruption_test`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: author fixed-effect team-size disruption test; same-scientist disruption contrast; author-controlled team-size disruption; within-scientist disruption validation
