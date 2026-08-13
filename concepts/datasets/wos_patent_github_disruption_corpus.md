# WOS-patent-GitHub disruption corpus

## Summary

The WOS-patent-GitHub disruption corpus is a cross-domain dataset design for comparing whether team size predicts disruptive versus developmental work across scientific papers, patents, and software projects.

## Canonical Form

- Unit of analysis: article, patent, software repository, team, citation/fork edge, reference, or field-year cohort.
- Typical representation: directed citation and fork networks with team size, impact, disruption score, reference age, and reference popularity.
- Data type: linked scholarly, technological, and software production records.
- Empirical signature: the same team-size gradient can be tested in papers, inventions, and code rather than in a single bibliometric database.

## Uses in Science of Science

- Provides the data backbone for [team size and disruption](../mechanisms/team_size_disruption.md), [team-size disruption-impact tail divergence](../validations/team_size_disruption_impact_tail_divergence.md), and [small-team deep-search delay](../mechanisms/small_team_deep_search_delay.md).
- Extends [disruption index](../measures/disruption_index.md) analysis from citation networks to patent applicant citations and [GitHub fork-citation networks](../representations/github_fork_citation_network.md).
- Links classic [Web of Science](web_of_science.md) coverage to technological and software traces, complementing [patent paper links](patent_paper_links.md) and [scientific non-patent references](scientific_non_patent_references.md).

## Operationalization

- Build directed networks in which nodes are papers, patents, or repositories and edges indicate citations or forks to predecessor work.
- For the software layer, construct a [GitHub fork-citation network](../representations/github_fork_citation_network.md) from core-member fork events rather than treating all repository forks as equivalent citations.
- Attach team size as authors, inventors, or contributing programmers, while keeping those roles domain-specific rather than treating them as identical.
- Compute disruption, citation/fork impact, reference age, and reference popularity on domain-appropriate predecessor and successor edges.
- Estimate whether team-size gradients replicate across the three domains and across field, time, institution, owner, platform, and [disruption-variant](../validations/disruption_variant_robustness_grid.md) strata.

## Evidence and Validations

- Verified full-text evidence from Wu, Wang, and Evans (2019) reports a study of more than 65 million papers, patents, and software products.
- The paper corpus includes 42,045,077 WOS articles from 1954-2014, with 27,728,266 cited at least once and 611,483,153 citations; disruption is calculated for 24,174,022 WOS papers in the main 1954-2014 window.
- The patent corpus starts from 4,910,816 USPTO patents and 64,694,807 citations from 1976-2014, then focuses on 2,548,038 patents from 2002-2014 linked by 44,798,680 applicant/inventor citations.
- The software corpus includes 15,984,275 GitHub repositories, 2,348,085 programmers, and 9,127,410 forks from 2011-2014.
- Wu et al. reduce the GitHub source traces to a repository network with 26,900 nodes and 108,640 links for disruption and search-measure analysis.

## Caveats

- WOS articles, USPTO patents, and GitHub repositories differ in authorship norms, citation meaning, and observation windows.
- The GitHub window is short, and fork behavior is only an approximate analogue of citation.
- Patent examiner citations and applicant citations have different meanings; Wu et al. focus on applicant citations for disruption analysis, making [patent citation source roles](../validations/patent_citation_source_roles.md) a necessary audit when extending the corpus.
- Team size is not equivalent across authors, inventors, and software programmers.

## Links

- [team size and disruption](../mechanisms/team_size_disruption.md)
- [team-size disruption-impact tail divergence](../validations/team_size_disruption_impact_tail_divergence.md)
- [within-author team-size disruption test](../validations/within_author_team_size_disruption_test.md)
- [research-design team-size control](../validations/research_design_team_size_control.md)
- [small-team deep-search delay](../mechanisms/small_team_deep_search_delay.md)
- [disruption index](../measures/disruption_index.md)
- [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md)
- [citation networks](../representations/citation_networks.md)
- [GitHub fork-citation network](../representations/github_fork_citation_network.md)
- [disruption variant robustness grid](../validations/disruption_variant_robustness_grid.md)
- [patent citation source roles](../validations/patent_citation_source_roles.md)
- [Web of Science](web_of_science.md)
- [patent paper links](patent_paper_links.md)
- [scientific non-patent references](scientific_non_patent_references.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]

## Metadata

- Concept ID: `wos_patent_github_disruption_corpus`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: cross-domain disruption corpus; WOS USPTO GitHub team-size corpus; paper patent software disruption panel; small-team large-team corpus
