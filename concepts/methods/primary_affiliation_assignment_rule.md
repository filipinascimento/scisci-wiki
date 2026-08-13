# Primary affiliation assignment rule

## Summary

Primary affiliation assignment rule is the method of assigning a single institution to an author-paper record when multiple affiliations are listed, typically by selecting the first listed affiliation.

## Canonical Form

- Unit of analysis: author-paper affiliation record, multi-affiliated author, publication, institution, or career trajectory.
- Typical representation: first-affiliation rule, primary-institution flag, author-paper-institution table, or affiliation-selection codebook.
- Method target: convert multi-affiliation publication metadata into a single institutional sequence for mobility or evaluation analyses.
- Empirical signature: author-paper records with multiple affiliations are reduced to one primary institution before constructing trajectories.

## Uses in Science of Science

- Adds a concrete assignment step to [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md).
- Operates on [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md), where raw metadata can contain multiple institutions per author-paper.
- Interacts with [consecutive-affiliation move filter](consecutive_affiliation_move_filter.md), because primary affiliation choice affects which moves survive trajectory cleaning.
- Provides a mobility-specific counterpart to [author-metric single-affiliation caveat](../validations/author_metric_single_affiliation_caveat.md).
- Documents a data-processing rule for [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md).

## Operationalization

- Identify author-paper records with more than one affiliation.
- Choose the first listed affiliation as primary, or explicitly state an alternative rule such as corresponding affiliation, most frequent career affiliation, or fractional assignment.
- Record whether the assignment was single-affiliation, primary-by-first-listed, or unresolved.
- Reconstruct career trajectories from primary affiliations and then apply filters for short stays, typos, or transient affiliations.
- Run sensitivity checks where multi-affiliated records are excluded or fractionally counted.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) reconstructs physicists' career trajectories from affiliations listed on Physical Review publications.
- The paper states that for authors with multiple affiliations on a paper, the first affiliation is considered the primary institution.
- The same methods section later describes filtering career trajectories to institutions reported in at least two consecutive papers, which means the primary-affiliation rule feeds directly into mobility detection.
- This makes first-affiliation selection a methodological choice that should be reported before interpreting career moves.

## Caveats

- First affiliation may reflect formatting conventions, author preference, laboratory order, or journal rules rather than the institution where the work was mainly performed.
- The rule can miss joint appointments, visiting positions, or distributed collaborations.
- Sensitivity checks are needed when multi-affiliation rates differ by country, career stage, institution, or field.

## Links

- [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [consecutive-affiliation move filter](consecutive_affiliation_move_filter.md)
- [author-metric single-affiliation caveat](../validations/author_metric_single_affiliation_caveat.md)
- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)
- [scientific mobility and brain circulation](../mechanisms/scientific_mobility.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; SciSciNet: W2049213211; WoS: unknown]

## Metadata

- Concept ID: `primary_affiliation_assignment_rule`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: first affiliation rule; primary institution assignment; multi-affiliation primary rule; author-paper primary affiliation
