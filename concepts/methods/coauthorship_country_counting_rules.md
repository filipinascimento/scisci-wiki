# Coauthorship country-counting rules

## Summary

Coauthorship country-counting rules define how multi-country publications are converted into country-level counts or country-country links for international collaboration analysis.

## Canonical Form

- Unit of analysis: paper, country address, country occurrence, bilateral country pair, or international coauthorship edge.
- Typical representation: integer count, fractional count, whole/distinct count, or normalized link count.
- Method target: make country-level collaboration volume and network weights reproducible.
- Empirical signature: the same multi-country paper produces different country totals and edge weights depending on the counting rule.

## Uses in Science of Science

- Provides the counting-rule layer behind [international coauthorship share](../measures/international_coauthorship_share.md) and [international collaboration networks](../representations/international_collaboration_networks.md).
- Complements [affiliation fractional network projection](affiliation_fractional_network_projection.md), which handles city and country projection in spatial networks.
- Helps compare country output, collaboration participation, and network edges without mixing incompatible denominators.
- Supplies an audit field for [Web of Science](../datasets/web_of_science.md), Dimensions, OpenAlex, or SciSciNet collaboration tables.

## Operationalization

- Preserve the publication identifier, all parsed country addresses, and all normalized country labels.
- Integer counting assigns a count of one to each country occurrence on an internationally coauthored paper.
- Fractional counting distributes the publication count across participating countries.
- Link counting creates country-country edges, often assigning one unit to each bilateral relationship or a normalized share across all pairs.
- Whole/distinct counting counts each represented country at most once per paper.
- Report the rule used before comparing country collaboration totals, cores, hubs, or growth rates.

## Evidence and Validations

- Verified full-text evidence from Wagner and Leydesdorff (2005) reports Science Citation Index international coauthorship data using integer counting, which assigns one to each occurrence of authorship from a country.
- In an endnote, the paper contrasts integer counting with fractional counting, where country shares are proportional to the number of authors or participating addresses.
- The same endnote also describes a link-counting approach in which each bilateral relationship among countries counts as one, which is common in network analysis.
- Wagner and Leydesdorff's distinction shows why international article shares, country collaboration cores, and country-network edges need explicit counting-rule provenance.

## Caveats

- Integer counting can inflate country totals for multi-country papers.
- Fractional counting can understate full participation when every country legitimately contributes to the collaboration.
- Link counting can overemphasize large consortium papers unless edges are normalized.
- Author-address multiplicity, multiple affiliations, and country-name standardization can change all counting variants.

## Links

- [international coauthorship share](../measures/international_coauthorship_share.md)
- [international collaboration networks](../representations/international_collaboration_networks.md)
- [country collaboration core](../measures/country_collaboration_core.md)
- [regional collaboration hubs](../measures/regional_collaboration_hubs.md)
- [subfield international coauthorship networks](../representations/subfield_international_coauthorship_networks.md)
- [affiliation fractional network projection](affiliation_fractional_network_projection.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [Web of Science](../datasets/web_of_science.md)

## References

- Wagner, C. S., & Leydesdorff, L. (2005). Network structure, self-organization, and the growth of international collaboration in science. *Research Policy*, 34(10), 1608-1618. https://doi.org/10.1016/j.respol.2005.08.002 [OpenAlex: W1964920419; Dimensions: pub.1029657568; SciSciNet: W1964920419; WoS: unknown]

## Metadata

- Concept ID: `coauthorship_country_counting_rules`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wagner and Leydesdorff (2005) (2005)
- Latest seen paper: Wagner and Leydesdorff (2005) (2005)
- Primary reference DOI: `10.1016/j.respol.2005.08.002`
- OpenAlex ID: `W1964920419`
- Dimensions ID: `pub.1029657568`
- SciSciNet ID: `W1964920419`
- Aliases: country coauthorship counting; integer country counting; fractional country counting; country link counting
