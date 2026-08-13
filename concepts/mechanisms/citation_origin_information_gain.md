# Citation-origin information gain

## Summary

Citation-origin information gain is the extra evaluative signal obtained when a citation indicator uses the citing source, not only the number of citations received.

## Canonical Form

- Unit of analysis: citation edge, citing journal, cited journal, or weighted citation network.
- Typical representation: source-weighted citation, recursive journal prestige weight, or citation-origin feature.
- Mechanism target: citations carry different amounts of status and attention depending on their source.
- Empirical signature: rankings change when citations from highly influential sources receive more weight than citations from peripheral sources.

## Uses in Science of Science

- Explains the network logic behind [Eigenfactor metrics](../measures/eigenfactor_metrics.md).
- Grounds [journal citation random walks](../methods/journal_citation_random_walk.md) in weighted citation origins.
- Extends [journal citation network mapping](../representations/journal_citation_network_mapping.md) from link counts to source-sensitive influence.
- Helps diagnose divergence between [Article Influence Score](../measures/article_influence_score.md) and impact factor.

## Operationalization

- Build a directed journal citation network with source and target journals.
- Replace unweighted incoming citation counts with source-weighted votes.
- Compare source-weighted rankings with count-based rankings.
- Audit whether the weighting scheme adds interpretable information rather than merely reinforcing prestige.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) states that Eigenfactor-family metrics weight citations from influential journals more heavily.
- The paper criticizes impact factor for ignoring the sources of citations.
- Its conclusion frames the journal citation network as a store of information that can be mined beyond raw citation totals.

## Caveats

- Source weighting can amplify prestige hierarchies.
- The information gain depends on source coverage, field boundaries, and journal-level aggregation.
- Citation origin is not a direct measure of truth or social value.

## Links

- [Eigenfactor metrics](../measures/eigenfactor_metrics.md)
- [journal citation random walks](../methods/journal_citation_random_walk.md)
- [journal citation network mapping](../representations/journal_citation_network_mapping.md)
- [Article Influence Score](../measures/article_influence_score.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A network approach to assessing scholarly journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; SciSciNet: W1993001003; WoS: unknown]

## Metadata

- Concept ID: `citation_origin_information_gain`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: citation source weighting; source-sensitive citation influence; prestige-weighted citation information
