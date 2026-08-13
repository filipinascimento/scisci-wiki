# GitHub fork-citation network

## Summary

GitHub fork-citation network represents software repositories as nodes and fork-derived reuse relations as directed edges, creating a software analogue of citation networks for disruption and search analyses.

## Canonical Form

- Unit of analysis: repository, programmer, fork event, core contributor, software citation edge, or repository citation neighborhood.
- Typical representation: directed repository network where a repository points to predecessor repositories forked by its core contributors.
- Representation target: software reuse and development lineage in open-source code platforms.
- Empirical signature: repository forks can be used to compute disruption, reference age, reference popularity, and team-size gradients outside papers and patents.

## Uses in Science of Science

- Extends [citation networks](citation_networks.md) and [focal-predecessor-future citation triads](focal_predecessor_future_citation_triads.md) into software production.
- Supplies the software layer of the [WOS-patent-GitHub disruption corpus](../datasets/wos_patent_github_disruption_corpus.md).
- Supports cross-domain tests of [team size and disruption](../mechanisms/team_size_disruption.md), [reference-age search depth](../measures/reference_age_search_depth.md), and [reference-popularity search](../measures/reference_popularity_search.md).
- Helps separate scholarly-paper citation behavior from code-reuse traces when testing whether motifs generalize beyond publications.

## Operationalization

- Start from repository, contributor, edit or push, and fork records.
- Identify core members of each repository as contributors whose edit count exceeds the average contributor edit count for that repository.
- Add a directed edge from repository A to repository B if a core member of A forks B between that user's first and last edit to A.
- Compute disruption and search measures on the resulting repository network while keeping the short GitHub observation window explicit.

## Evidence and Validations

- Verified full-text evidence from Wu, Wang, and Evans (2019) uses GitHub data with 15,984,275 repositories, 2,348,085 programmers, and 9,127,410 fork patterns from 2011 to 2014.
- The paper identifies core members as those contributing more edits or pushes than the average contributor to a repository.
- Wu et al. add a citation-like link from repository A to B when a core member of A forked B between the user's first and last edit of A.
- The constructed network used for disruption and related measures contains 26,900 repository nodes and 108,640 links.

## Caveats

- Forks are not identical to scholarly citations; they can signal copying, experimentation, backup, dependency exploration, or social participation.
- GitHub's 2011-2014 observation window is short relative to paper and patent citation windows.
- Core-member thresholds can miss low-volume but conceptually important contributors.
- Platform norms, bot activity, and repository deletion or privatization can affect network coverage.

## Links

- [WOS-patent-GitHub disruption corpus](../datasets/wos_patent_github_disruption_corpus.md)
- [citation networks](citation_networks.md)
- [focal-predecessor-future citation triads](focal_predecessor_future_citation_triads.md)
- [team size and disruption](../mechanisms/team_size_disruption.md)
- [reference-age search depth](../measures/reference_age_search_depth.md)
- [reference-popularity search](../measures/reference_popularity_search.md)
- [disruption variant robustness grid](../validations/disruption_variant_robustness_grid.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]

## Metadata

- Concept ID: `github_fork_citation_network`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: software fork citation network; GitHub repository citation network; fork-derived software reuse graph; codebase citation network
