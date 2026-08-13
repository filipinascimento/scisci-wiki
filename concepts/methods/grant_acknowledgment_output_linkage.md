# Grant-acknowledgment output linkage

## Summary

Grant-acknowledgment output linkage matches funded projects to later research outputs by resolving grant identifiers in publication acknowledgments and then attaching citation, patent, or other downstream traces.

## Canonical Form

- Unit of analysis: grant, project number, publication, acknowledgment string, PMID, citation, patent, or grant-output pair.
- Typical representation: paper-grant bipartite table plus outcome windows and match-route metadata.
- Method target: reconstruct which outputs can be attributed to a reviewed or funded project.
- Empirical signature: publications acknowledging a grant within a prespecified window become the output set for that grant.

## Uses in Science of Science

- Operationalizes the output side of [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md).
- Supplies the publication and citation outcomes used in [grant peer-review value-added](../validations/grant_peer_review_value_added.md).
- Connects [funding acknowledgments and grant links](../datasets/funding_acknowledgments.md) to downstream science and technology outcomes.
- Gives a repeatable linkage workflow for [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md) style data.

## Operationalization

- Parse standardized or partial grant identifiers from publication acknowledgment records.
- Align the identifier to the nearest relevant competitive application or renewal cycle.
- Apply an output window, often 5 years after grant approval, and audit longer windows such as 10 years for robustness.
- Attach citation outcomes, high-impact publication flags, and patent links to the grant-supported publication set.
- When citation outcomes come from a different source than acknowledgments, preserve the [PubMed-WoS grant citation crosswalk](pubmed_wos_grant_citation_crosswalk.md) and unmatched-record diagnostics.
- Preserve multiple-grant acknowledgments as many-to-many links rather than forcing a single grant assignment.
- Split grant-level downstream outcomes into [grant hit-publication tail](../measures/grant_hit_publication_tail.md) and [direct and indirect grant-patent outcomes](../measures/direct_indirect_grant_patent_outcomes.md) when evaluating review or funding systems.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) matches NIH R01 grants to PubMed publications acknowledging grant support within 5 years of grant approval.
- Their supplementary text describes using full grant numbers and partial project numbers to assign publications to the relevant competitive review cycle.
- The same paper tests robustness with 10-year acknowledgment windows and broader PI-name-based publication matching.
- The broader author-based checks are split into [PI-authored publication linkage robustness](../validations/pi_authored_publication_linkage_robustness.md), while the PubMed-to-Web-of-Science citation merge is split into [PubMed-WoS grant citation crosswalk](pubmed_wos_grant_citation_crosswalk.md).
- For technological outcomes, Li and Agha link grants to patents directly through federal-support acknowledgments and indirectly through patents citing grant-supported publications.

## Caveats

- Acknowledgment behavior varies across fields, periods, journals, and investigators.
- Outputs can acknowledge multiple grants, creating shared credit and possible double counting.
- Broader PI-name output windows capture unacknowledged work but introduce unrelated publications.
- Patent and publication citation windows can truncate long-lag translational outcomes.

## Links

- [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md)
- [funding acknowledgments and grant links](../datasets/funding_acknowledgments.md)
- [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md)
- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)
- [patent paper links](../datasets/patent_paper_links.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [grant hit-publication tail](../measures/grant_hit_publication_tail.md)
- [direct and indirect grant-patent outcomes](../measures/direct_indirect_grant_patent_outcomes.md)
- [citation window selection](citation_window_selection.md)
- [PubMed-WoS grant citation crosswalk](pubmed_wos_grant_citation_crosswalk.md)
- [PI-authored publication linkage robustness](../validations/pi_authored_publication_linkage_robustness.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]

## Metadata

- Concept ID: `grant_acknowledgment_output_linkage`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: grant-output matching; grant acknowledgment linkage; NIH grant publication match; grant-supported output window
