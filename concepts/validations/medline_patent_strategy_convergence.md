# MEDLINE-patent strategy convergence

## Summary

MEDLINE-patent strategy convergence tests whether publication and patent records imply similar problem-choice strategies in the same knowledge domain.

## Canonical Form

- Unit of analysis: article-derived edge, patent-derived edge, fitted strategy parameter, or source comparison.
- Typical representation: side-by-side degree-distance model estimates for MEDLINE articles and U.S. patents.
- Validation target: check whether inferred research-choice patterns are robust to source genre.
- Empirical signature: article and patent strategies have similar parameter signs and magnitudes, with interpretable source differences.

## Uses in Science of Science

- Validates [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md) against a second document stream.
- Links [biomedical chemical-relationship network panel](../datasets/biomedical_chemical_relationship_network_panel.md) to patent-side knowledge traces.
- Supports [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md) by showing that the inferred conservative strategy is not only an article artifact.
- Connects patent data to [science-technology distance](../measures/science_technology_distance.md) and [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md).

## Operationalization

- Build comparable article and patent relationship networks from the same chemical lexicon.
- Fit the same degree-distance strategy model to each source.
- Compare parameter signs, credible intervals, and time trends.
- Interpret differences through source incentives, disclosure norms, and patenting selectivity.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) estimates strategy parameters separately for MEDLINE articles and U.S. patents.
- The paper reports that article and patent strategies are very similar overall.
- Rzhetsky et al. describe patent-derived strategies as slightly more conservative than MEDLINE article strategies.
- The same evidence supports using patent abstracts as a secondary validation stream for biomedical chemical-relation search behavior.

## Caveats

- Patents and articles select different kinds of work and use different disclosure language.
- Patent abstract co-mentions may reflect legal scope or invention framing, not only experimental relationship testing.
- Source agreement does not remove shared bias from the chemical lexicon or co-mention edge rule.

## Links

- [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md)
- [biomedical chemical-relationship network panel](../datasets/biomedical_chemical_relationship_network_panel.md)
- [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md)
- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md)
- [patent-paper links](../datasets/patent_paper_links.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; WoS: unknown; SciSciNet: W2130145803]

## Metadata

- Concept ID: `medline_patent_strategy_convergence`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: article-patent strategy comparison; publication patent search convergence; MEDLINE USPTO strategy validation; patent strategy conservatism
