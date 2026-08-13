# Social-Contact Proxy Boundary

## Summary

Social-contact proxy boundary is the validation limit that precise network traces do not necessarily measure actual human contact or acquaintance.

## Canonical Form

- Unit of analysis: proxy network, social tie, coappearance relation, infrastructure edge, or bibliometric tie.
- Typical representation: contrast between measured edges and the intended social relation.
- Validation target: whether an observable network is a valid proxy for human interaction.
- Empirical signature: some networks are easy to measure but weakly tied to the target social-contact construct.

## Uses in Science of Science

- Provides a general guardrail for [generic trace proxy target operationalization](../methods/generic_trace_proxy_target_operationalization.md).
- Supports careful interpretation of [coauthorship affiliation-network validity](coauthorship_affiliation_network_validity.md).
- Helps compare coauthorship to nonhuman or weak social proxies in [scale-free exemplar network panel](../datasets/scale_free_exemplar_network_panel.md).

## Operationalization

- Define the intended social relation before choosing a trace.
- Compare each candidate edge type with the target relation.
- Identify negative examples where the network is precise but socially indirect.
- Treat proxy validity as separate from graph completeness or size.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) argues that power grids, the Internet, and air traffic networks may reflect society but do not directly measure contact between people.
- The paper also notes that movie coappearance networks involve people but may not imply meaningful acquaintance.
- Newman uses this boundary to motivate coauthorship as a more direct, though still imperfect, social connection trace.

## Caveats

- Different science-of-science questions require different proxy strengths.
- Weak proxies can still be useful for infrastructure or information-flow questions.
- Coauthorship itself can overstate or understate true collaboration.

## Links

- [generic trace proxy target operationalization](../methods/generic_trace_proxy_target_operationalization.md)
- [coauthorship affiliation-network validity](coauthorship_affiliation_network_validity.md)
- [scale-free exemplar network panel](../datasets/scale_free_exemplar_network_panel.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [self-report network mapping limits](self_report_network_mapping_limits.md)

## References

- Newman, M. E. J. (2001). The structure of scientific collaboration networks. *Proceedings of the National Academy of Sciences*, 98(2), 404-409. https://doi.org/10.1073/pnas.98.2.404 [OpenAlex: W2125315567; Dimensions: pub.1018280471; SciSciNet: W2125315567; WoS: unknown]

## Metadata

- Concept ID: `social_contact_proxy_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2001) (2001)
- Primary reference DOI: `10.1073/pnas.98.2.404`
- OpenAlex ID: `W2125315567`
- Dimensions ID: `pub.1018280471`
- SciSciNet ID: `W2125315567`
- Aliases: social proxy validity boundary; contact-trace mismatch; human-acquaintance proxy caveat; network target-validity boundary
