# Ambiguous Massive-Authorship Exclusion

## Summary

Ambiguous massive-authorship exclusion removes records with ambiguous author-affiliation links or massive authorship before mobility inference to reduce linkage noise.

## Canonical Form

- Unit of analysis: publication record, author-affiliation link, mobility panel, or trajectory reconstruction.
- Typical representation: source-record exclusion rule.
- Validation target: prevent affiliation noise and many-author anomalies from generating false moves.
- Empirical signature: a documented share of records is removed before author and affiliation trajectories are built.

## Uses in Science of Science

- Qualifies [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md).
- Adds a source-record validation layer to [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md).
- Complements [consecutive-affiliation move filter](../methods/consecutive_affiliation_move_filter.md), which smooths trajectories after record construction.
- Documents a preprocessing step in the [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md).

## Operationalization

- Identify papers with ambiguous author-affiliation matching.
- Identify massive-authorship records whose address structure makes individual affiliation assignment unreliable.
- Remove or separately analyze these records before mobility trajectories are inferred.
- Report the removed share and assess sensitivity to retaining the records.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) states that the APS dataset includes author names and affiliations for each paper.
- The paper removes about five percent of publications with ambiguous author-affiliation links or massive authorship before mobility analysis.
- This exclusion precedes author disambiguation, affiliation disambiguation, and career-trajectory reconstruction.

## Caveats

- Excluding massive-authorship records can remove fields or subfields where large-team science is important.
- The rule improves linkage reliability but may bias mobility estimates away from big-collaboration careers.
- The excluded share and criteria should be reported for reproducibility.

## Links

- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md)
- [consecutive-affiliation move filter](../methods/consecutive_affiliation_move_filter.md)
- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)
- [journal-article mobility coverage bias](journal_article_mobility_coverage_bias.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; SciSciNet: W2049213211; WoS: unknown]

## Metadata

- Concept ID: `ambiguous_massive_authorship_exclusion`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: ambiguous affiliation exclusion; massive-authorship mobility filter; author-affiliation ambiguity filter; large-team record exclusion
