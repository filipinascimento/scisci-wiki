# JCR 2006 journal citation network

## Summary

JCR 2006 journal citation network is the directed, weighted journal-to-journal citation graph used by West et al. to compute Eigenfactor and Article Influence metrics for Journal Citation Reports journals.

## Canonical Form

- Unit of analysis: journal, citing journal, cited journal, citation edge, journal year, or citation window.
- Typical representation: directed weighted journal citation matrix with journals as nodes and citation counts as edge weights.
- Dataset target: a journal-level citation network suitable for recursive influence ranking.
- Empirical signature: thousands of journals linked by millions of citations, with enough coverage to run PageRank-like journal ranking.

## Uses in Science of Science

- Supplies the empirical substrate for [journal citation random walk](../methods/journal_citation_random_walk.md), [Eigenfactor Score](../measures/eigenfactor_score.md), and [Article Influence Score](../measures/article_influence_score.md).
- Turns [journal citation network mapping](../representations/journal_citation_network_mapping.md) into a ranked journal-influence system.
- Provides a concrete journal-level example of [recursive citation weighting](../mechanisms/recursive_citation_weighting.md).
- Supports collection-level analyses such as [Eigenfactor bundle influence](../measures/eigenfactor_bundle_influence.md) and [Eigenfactor cost-effectiveness](../measures/eigenfactor_cost_effectiveness.md).

## Operationalization

- Start from Journal Citation Reports journal-to-journal citation data for a declared year.
- Construct directed weighted edges from citing journals to cited journals.
- Apply the Eigenfactor preprocessing choices, including citation-window rules and treatment of journal self-citations.
- Store the journal set, citation window, article counts, field labels, and source version alongside the matrix.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) reports an Eigenfactor.org implementation using a network of 7,600 journals and more than 8.5 million citations.
- The source data are Thomson-Reuters Journal Citation Reports records, with the paper's example tables using 2006 JCR data.
- The paper uses this network to compute total journal influence, per-article Article Influence, and ranking comparisons against impact factor.
- West et al. emphasize that citation-network scale requires computational ranking rather than manual inspection.

## Caveats

- The graph inherits Journal Citation Reports coverage, source-journal inclusion, and classification limits.
- Journal-level edges do not identify which individual paper or author supplied influence.
- Rankings depend on the citation window, self-citation exclusion, article-count denominator, and journal set boundary.
- Later JCR snapshots can change the network and should be versioned separately.

## Links

- [journal citation random walk](../methods/journal_citation_random_walk.md)
- [Eigenfactor metrics](../measures/eigenfactor_metrics.md)
- [Eigenfactor Score](../measures/eigenfactor_score.md)
- [Article Influence Score](../measures/article_influence_score.md)
- [journal citation network mapping](../representations/journal_citation_network_mapping.md)
- [journal self-citation exclusion](../validations/journal_self_citation_exclusion.md)
- [citation window selection](../methods/citation_window_selection.md)
- [Web of Science](web_of_science.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A network approach to assessing scholarly journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]

## Metadata

- Concept ID: `jcr_2006_journal_citation_network`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: 2006 JCR Eigenfactor network; Journal Citation Reports citation graph; Eigenfactor journal network; JCR journal citation matrix
