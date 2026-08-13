# Reputation signal-flow graph

## Summary

Reputation signal-flow graph represents scientific careers as coupled scientist and publication networks in which reputation signals move among people, papers, citations, and collaborations.

## Canonical Form

- Unit of analysis: scientist, publication, author-paper edge, citation edge, collaboration edge, or career-year signal.
- Typical representation: heterogeneous or multiplex graph linking a collaboration network, a citation network, and author-paper affiliation edges.
- Representation target: show where reputation, paper visibility, coauthor visibility, and citation attention can flow before being modeled statistically.
- Empirical signature: author-level reputation can affect early paper attention, while paper citations feed back into author reputation.

## Uses in Science of Science

- Specializes [scholarly entity graphs](scholarly_entity_graphs.md) for reputation and career-impact analysis.
- Connects [coauthorship networks](coauthorship_networks.md), [citation networks](citation_networks.md), and [multiplex scholarly graphs](multiplex_scholarly_graphs.md) to paper-level citation dynamics.
- Provides the representational layer behind [reputation effects](../mechanisms/reputation_effects.md), [cumulative author reputation](../measures/cumulative_author_reputation.md), and [reputation effect citation models](../methods/reputation_effect_citation_model.md).
- Makes the feedback path between paper citations and author status explicit before adding regression or simulation assumptions.

## Operationalization

- Create scientist nodes and publication nodes from disambiguated author and work records.
- Add coauthor or collaboration edges among scientists, citation edges among publications, and authorship edges between scientists and publications.
- Time-stamp nodes and edges so reputation signals used for prediction are available before the citation event being modeled.
- Separate scientist-to-scientist, paper-to-paper, paper-to-scientist, and scientist-to-paper channels when estimating mechanisms.
- Record whether coauthor reputation is modeled directly or absorbed into a [central-scientist reputation approximation](../validations/central_scientist_reputation_approximation.md).

## Evidence and Validations

- Verified full-text evidence from Petersen et al. (2014) frames a scientific career as embedded in two networks: a scientist collaboration network and a publication citation network.
- The paper describes cross-links between publications and scientists, so paper reputation can feed author reputation and author reputation can feed paper citation rates.
- Petersen et al. use this representation to focus on the author-to-paper channel while recognizing feedback from papers back to authors.
- The representation clarifies why citation dynamics can mix paper-specific cumulative advantage, author status, and social-network visibility.

## Caveats

- A signal-flow graph is a representation, not proof that every edge carries causal influence.
- Author disambiguation, missing collaborations, and incomplete citation histories can distort inferred reputation paths.
- Reputation, quality, visibility, and field size can be hard to separate without additional design or controls.

## Links

- [scholarly entity graphs](scholarly_entity_graphs.md)
- [multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [coauthorship networks](coauthorship_networks.md)
- [citation networks](citation_networks.md)
- [paper-author-affiliation linkages](paper_author_affiliation_linkages.md)
- [reputation effects](../mechanisms/reputation_effects.md)
- [cumulative author reputation](../measures/cumulative_author_reputation.md)
- [author name visibility signal](../mechanisms/author_name_visibility_signal.md)
- [reputation effect citation model](../methods/reputation_effect_citation_model.md)
- [central-scientist reputation approximation](../validations/central_scientist_reputation_approximation.md)
- [highly cited scientist career panel](../datasets/highly_cited_scientist_career_panel.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]

## Metadata

- Concept ID: `reputation_signal_flow_graph`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Petersen et al. (2014) (2014)
- Latest seen paper: Petersen et al. (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: reputation multiplex graph; scientist-paper signal graph; career reputation graph; author-paper reputation network
