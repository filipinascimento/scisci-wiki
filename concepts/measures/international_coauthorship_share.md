# International coauthorship share

## Summary

International coauthorship share measures the fraction of publications in a corpus that include authors from more than one country.

## Canonical Form

- Unit of analysis: paper set, field, country, database, year, or policy portfolio.
- Typical representation: percentage or time series of internationally coauthored records.
- Mechanism or measurement target: growth of cross-border collaboration as observed through publication addresses.
- Empirical signature: rising share of papers with multi-country affiliations over time, often varying by field and country.

## Uses in Science of Science

- Provides a compact growth measure for [international collaboration networks](../representations/international_collaboration_networks.md).
- Helps separate internationalization trends from network-structure motifs such as [country collaboration core](country_collaboration_core.md) and [regional collaboration hubs](regional_collaboration_hubs.md).
- Serves as a first-pass outcome for the [international collaboration explanation matrix](../methods/international_collaboration_explanation_matrix.md).
- Supports policy evaluation of travel, funding, and capacity-building interventions that claim to increase cross-border scientific collaboration.

## Operationalization

- Select a publication database, corpus, field definition, and publication years.
- Parse and normalize author affiliation countries.
- Mark papers with at least two distinct countries as internationally coauthored.
- Report the share of internationally coauthored records among all records, with address-counting and integer/fractional-counting rules documented.
- Use [coauthorship country-counting rules](../methods/coauthorship_country_counting_rules.md) when moving from paper-level international shares to country-level totals or network edges.

## Evidence and Validations

- Verified full-text evidence from Wagner and Leydesdorff (2005) reports Science Citation Index data for 1990 and 2000.
- Their table shows that internationally coauthored records rose from 51,596 of 590,841 unique SCI documents in 1990 to 121,432 of 778,446 in 2000.
- The corresponding international coauthorship share nearly doubled from 8.7% to 15.6%, making the metric a core empirical signature of the 1990s growth in international collaboration.

## Caveats

- Coauthorship is an incomplete proxy for collaboration and misses informal collaboration, facilities, acknowledgments, and data sharing.
- Country-address parsing and multi-address assignment rules can shift the numerator.
- Database expansion, field composition, and document-type filters can make time trends look like collaboration growth.

## Links

- [international collaboration networks](../representations/international_collaboration_networks.md)
- [international collaboration explanation matrix](../methods/international_collaboration_explanation_matrix.md)
- [coauthorship country-counting rules](../methods/coauthorship_country_counting_rules.md)
- [country collaboration core](country_collaboration_core.md)
- [regional collaboration hubs](regional_collaboration_hubs.md)
- [subfield international coauthorship networks](../representations/subfield_international_coauthorship_networks.md)
- [Web of Science](../datasets/web_of_science.md)
- [bibliometric data access modes](../methods/bibliometric_data_access_modes.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)
- [mobility policy shock evaluation](../validations/mobility_policy_shock_evaluation.md)

## References

- Wagner, C. S., & Leydesdorff, L. (2005). Network structure, self-organization, and the growth of international collaboration in science. *Research Policy*, 34(10), 1608-1618. https://doi.org/10.1016/j.respol.2005.08.002 [OpenAlex: W1964920419; Dimensions: pub.1029657568; WoS: unknown]

## Metadata

- Concept ID: `international_coauthorship_share`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wagner and Leydesdorff (2005) (2005)
- Latest seen paper: Wagner and Leydesdorff (2005) (2005)
- Primary reference DOI: `10.1016/j.respol.2005.08.002`
- OpenAlex ID: `W1964920419`
- Dimensions ID: `pub.1029657568`
- SciSciNet ID: `W1964920419`
- Aliases: international collaboration share; cross-border coauthorship share; internationally coauthored records; international article share
